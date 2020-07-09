import styled from 'styled-components'
import {text_color, page_background_color} from '../styles.js'

export const PageContainer = styled.div`
    background-color: ${page_background_color};
    color: ${text_color};
    min-height: 100vh;
    padding: 0 0 5em;
`

export default PageContainer