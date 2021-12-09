export class LogStyle {
	fg(line: string): string
	bg(line: string): string
}

export class Logger {
	debug(...info: any): void
	warn(...info: any): void
	error(...info: any): void
	info(...info: any): void
	imporant(...info: any): void
	success(...info: any): void
	data(...info: any): void
	label(label: string, style: LogStyle, ...info: any): void
	label(label: string, ...info: any): void
	space(...info: any): void
	block(...info: any): void
	chuckle(): void
}

export type Log = {
	info: any
	label: string
	style: LogStyle
}

export type LoggerOptions = {
	verbose?: 'debug' | 'warnigs' | 'errors'
	width?: number
	handleUncaughtException?: boolean
	handleUnhandledRejection?: boolean
}

export function createLogger(options?: LoggerOptions): Logger
export function bold(line: string): string

export const Debug: LogStyle
export const Data: LogStyle

export const Red: LogStyle
export const Green: LogStyle
export const Yellow: LogStyle
export const Blue: LogStyle
export const Magenta: LogStyle
export const Cyan: LogStyle
export const White: LogStyle