#! /usr/bin/env node

import { promises as fs } from 'fs'
import { spawnSync } from 'child_process'

let argi = 2
const GENERATE = process.argv[argi] === '--generate'
if (GENERATE) {
  argi += 1
}

const NETWORK_CONFIG =
  process.argv[argi] || 'https://devnet.agoric.net/network-config'

const recursiveFiles = async (path) => {
  const names = await fs.readdir(path)
  const subents = await Promise.all(
    names
      .filter((name) => !name.startsWith('.'))
      .map(async (name) => {
        const p = `${path}/${name}`
        const st = await fs.stat(p)
        if (st.isFile()) {
          return [p]
        }
        if (!st.isDirectory()) {
          return []
        }
        return recursiveFiles(p)
      })
  )

  return subents.flatMap((ents) => ents)
}

const doConfig = async (NETWORK_CONFIG) => {
  console.log('configuring', NETWORK_CONFIG)
  const hostname = new URL(NETWORK_CONFIG).hostname
  const NETWORK = hostname.split('.')[0]
  // console.log(NETWORK)

  const dir = 'configs'
  const files = await recursiveFiles(dir)
  await Promise.all(
    files.map(async (inp) => {
      const outp = inp.slice(dir.length + 1)
      const content = await fs.readFile(inp, 'utf-8')
      const newContent = content
        .replace(/@NETWORK@/g, NETWORK)
        .replace(
          /@NETWORK_NAME@/g,
          `${NETWORK[0].toUpperCase()}${NETWORK.slice(1)}`
        )
      console.log('creating', outp)
      await fs.writeFile(outp, newContent)
    })
  )
}

const doExecute = async (cmd) => {
  await null
  spawnSync(cmd[0], cmd.slice(1), { stdio: 'inherit' })
}

let run = doConfig(NETWORK_CONFIG)
if (GENERATE) {
  run = run.then((_res) => doExecute(['yarn', 'generate']))
}

run.then(
  (res) => process.exit(0),
  (rej) => {
    console.error(rej)
    process.exit(1)
  }
)
