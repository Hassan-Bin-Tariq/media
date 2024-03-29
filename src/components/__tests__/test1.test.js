import{render, screen,cleanup} from '@testing-library/react';
import renderer from 'react-test-render';
import Login from "./components/login/login"
import puppeteer from "puppeteer";

describe("App.js", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  it("shows a success message after submitting a form", async () => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector(".form-header");

    await page.click(".form-input__email");
    await page.type(".form-input__email", "username@nu.edu.pk");

    await page.click(".form-input__password");
    await page.type(".form-input__password", "password");

    await page.click(".form-submit-button");

    await page.waitForSelector(".form-success-message");

    const text = await page.$eval(
      ".form-success-message",
      (e) => e.textContent
    );
    expect(text).toContain("You are now signed in.");
  });

  it("shows an error message if authentication fails", async () => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector(".form-header");

    await page.click(".form-input__email");
    await page.type(".form-input__email", "username@nu.edu.pk");

    await page.click(".form-input__password");
    await page.type(".form-input__password", "password123");

    await page.click(".form-submit-button");

    await page.waitForSelector(".form-error-text");

    const text = await page.$eval(".form-error-text", (e) => e.textContent);
    expect(text).toContain("Please enter a correct username/password.");
  });

  afterAll(() => browser.close());
});
describe(<SignUp/>, () => {

    
  
    test('Switch state works correctly', async () => {
      render( <About/> )
  
      expect(screen.getByText("SignUp")).toBeInTheDocument()
      userEvent.click(screen.getByText('User Signed Up sucessfully'))
      expect(screen.getByText("username@nu.edu.pk")).toBeInTheDocument()
      userEvent.click(screen.getByText('You can signin now'))
      expect(screen.getByText("passowrd123")).toBeInTheDocument()
    })
  
  })

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