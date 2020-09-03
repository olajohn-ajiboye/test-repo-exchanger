import React from 'react'
import PocketSelector from './PocketSelector'

import { PocketWrapper, Input } from '../components/Styled'

const SourcePocket = () => {
    return (
        <PocketWrapper background="white">
            <PocketSelector />
            <Input autoFocus={true} type="number" placeholder="0" min="0" max="1000" value="2000" />
        </PocketWrapper>
    )
}

export default SourcePocket
