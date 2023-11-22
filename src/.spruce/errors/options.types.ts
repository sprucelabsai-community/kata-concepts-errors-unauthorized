import { SpruceErrors } from "#spruce/errors/errors.types"
import { ErrorOptions as ISpruceErrorOptions} from "@sprucelabs/error"

export interface NotFoundErrorOptions extends SpruceErrors.Eightbitstories.NotFound, ISpruceErrorOptions {
	code: 'NOT_FOUND'
}
export interface MetaNotFoundErrorOptions extends SpruceErrors.Eightbitstories.MetaNotFound, ISpruceErrorOptions {
	code: 'META_NOT_FOUND'
}

type ErrorOptions =  | NotFoundErrorOptions  | MetaNotFoundErrorOptions 

export default ErrorOptions
