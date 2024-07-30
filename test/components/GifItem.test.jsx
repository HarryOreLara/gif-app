import { render } from "@testing-library/react"
import GifItem from "../../src/components/GifItem"

describe('Pruebas del componente GifItem', () => { 

    const title = 'Naruto';
    const url = 'https://'

    test('Debe hacer match con el snapshot ', () => {
      render(<GifItem title={title} url={url} />)
    })
    

 })