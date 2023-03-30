import{render, screen,cleanup} from '@testing-library/react';
import renderer from 'react-test-render';
import Login from "./components/login/login"

//testing login
test('should render the foven component', () =>
{
    render(<Login/>)
    //expect('true').toBe(true);
    const elem=screen.getAllByTestId('phonebox');
    expect(elem).toBeInTheDocument();
    expect(elem).toHaveTextContent('03057744080');
})

test('matches snapshot', ()=>
{

    const tree = render.create(<Login/>).toJSON;
    console.log(tree);
    expect((tree).toMatchSnapshot());
})

//mock
export const getLogin=() =>
{

    return;
}
const mockInfo = jest.fn();
const mockWarn = jest.fn();
// mocking Logging
jest.mock(<Login/>, () => {
    return {
        getLogin: () => ({
            info: mockInfo,
            warn: mockWarn
        })
    }
})