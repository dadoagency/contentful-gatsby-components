import React from 'react'
import * as S from './Content.style'
import renderOptions from "../../../utils/richText"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default ({ body }) => {
    
    return (
        <div class="content">
            {documentToReactComponents(body.json, renderOptions)}
        </div>
    )
}
