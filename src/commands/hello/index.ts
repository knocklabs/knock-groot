import {Args, Command, Flags} from '@oclif/core'

export default class Hello extends Command {
  async run(): Promise<void> {
    this.log("I am Groot!")
  }
}
