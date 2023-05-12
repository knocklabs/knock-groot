import {Command} from '@oclif/core'

export default class Hello extends Command {
  async run(): Promise<void> {
    this.log("I am Groot 0.0.40")
  }
}
