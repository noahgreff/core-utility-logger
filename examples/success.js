'use strict'

const Logger = require('../lib/logger')

const logger = new Logger({ verbose: 'debug' })

logger.space('success', 'Loading complete.')