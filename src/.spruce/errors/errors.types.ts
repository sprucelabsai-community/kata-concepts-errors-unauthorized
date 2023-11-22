/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-redeclare */

import { default as SchemaEntity } from '@sprucelabs/schema'
import * as SpruceSchema from '@sprucelabs/schema'





export declare namespace SpruceErrors.Eightbitstories {

	
	export interface NotFound {
		
	}

	export interface NotFoundSchema extends SpruceSchema.Schema {
		id: 'notFound',
		namespace: 'Eightbitstories',
		name: 'Not found',
		    fields: {
		    }
	}

	export type NotFoundEntity = SchemaEntity<SpruceErrors.Eightbitstories.NotFoundSchema>

}



export declare namespace SpruceErrors.Eightbitstories {

	
	export interface MetaNotFound {
		
	}

	export interface MetaNotFoundSchema extends SpruceSchema.Schema {
		id: 'metaNotFound',
		namespace: 'Eightbitstories',
		name: 'Meta not found',
		    fields: {
		    }
	}

	export type MetaNotFoundEntity = SchemaEntity<SpruceErrors.Eightbitstories.MetaNotFoundSchema>

}




