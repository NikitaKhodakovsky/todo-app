import { IsInt, IsNotEmpty, IsString, Max, Min, validateSync, ValidationArguments } from 'class-validator'
import { red } from 'ansi-colors'

const portValidationMessage = ({ property }: ValidationArguments) => `${property} must be in range from 0 to 65536`

class Config {
    @IsInt()
    @Min(0, { message: portValidationMessage })
    @Max(65536, { message: portValidationMessage })
    public PORT: number

    @IsString()
    @IsNotEmpty()
    public ORIGIN: string
}

const config = new Config()

config.PORT = parseInt(process.env.PORT || '')
config.ORIGIN = process.env.ORIGIN as string

const result = validateSync(config)

if (result.length !== 0) {
    console.error(red('Environment variables validation error'))
    for (let i = 0; i < result.length; i++) {
        const { constraints } = result[i]
        const messages = Object.values(constraints || {})
        messages.forEach((message) => console.error(red(message)))
    }
    process.exit(1)
}

export const { PORT, ORIGIN } = config