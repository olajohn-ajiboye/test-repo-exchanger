import styled from 'styled-components'

interface PocketWrapperProps {
    readonly background: 'white' | 'transparent'
}

export const AppWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 12px;
    display: flex;
    justify-content: center;
    flex-direction: row;
`

export const Input = styled.input`
    height: 50px;
    width: 150px;
    border: 0;
    border-bottom: 1px solid #1890ff;
    margin-bottom: 20px;
    font-size: 20px;
    text-align: right;
    background-color: transparent;
    &:focus {
        outline: 0;
    }
`
export const PocketWrapper = styled.div<PocketWrapperProps>`
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    background-color: ${props => props.background};
`

export const WidgetWrapper = styled.div`
    width: 400px;
    height: 600px;
    margin: 3rem;
    background-color: rgb(240, 240, 240);
    border: 1px solid rgb(240, 240, 240);
    border-radius: 12px;
`