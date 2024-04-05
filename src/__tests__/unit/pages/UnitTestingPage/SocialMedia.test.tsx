import { render, screen, fireEvent } from "@testing-library/react";
import SocialMedia from "../../../../pages/UnitTestingPage/SocialMedia";
import renderer from "react-test-renderer";

describe('SocialMedia', () => {
    // Test : Case insenstive check test
    it('has Social Media in heading', () => {
        render(<SocialMedia name="Instagram" followersCount="2M+" />);
        const headingElement = screen.getByText(/SociaL Media Info/i);
        expect(headingElement).toBeDefined();
    })

    // Test : How to pass props in a component and test
    it('has received props name and followers', () => {
        render(<SocialMedia name="Facebook" followersCount="2M+" />);
        const followersDetailsElement = screen.getByTestId('followersDetails');
        expect(followersDetailsElement.textContent).toBe("Facebook with 2M+ followers");
    })

    // Test : Form element is present or not?
    it('has input field with country name', () => {
        render(<SocialMedia name="Instagram" followersCount="2M+" />);
        const countryInput = screen.getByPlaceholderText("Enter a country name");
        expect(countryInput).toBeTruthy();
        
    })

    // Test : How to access the input element?
    it('has input country name with default value', () => {
        render(<SocialMedia name="YouTube" followersCount="2M+" />);
        // find the element in which you have on change event
        const countryInput: HTMLInputElement = screen.getByRole("textbox");
        expect(countryInput.value).toBeTruthy();
        
    })

    // Test : Testing Events and State
    it('should update country name on change', () => {
        render(<SocialMedia name="YouTube" followersCount="2M+" />);
        const countryInput: HTMLInputElement = screen.getByRole("textbox");
        //Trigerring or emitting event through program
        fireEvent.change(countryInput, {
            target: {
                value: 'Singapore'
            }
        })
        expect(countryInput.value).toBe('Singapore');
        // Multiple expect in same block
        const websiteInfoElement = screen.getByTestId('websiteInfo');
        expect(websiteInfoElement.textContent).toBe('Visit Genesys Singapore website')
    })

    // Test : Inline element style
    it('has background color green', () => {
        render(<SocialMedia name="YouTube" followersCount="2M+" />);
        const followersDetailsElement = screen.getByTestId('followersDetails');
        expect(followersDetailsElement).toHaveStyle('background-color: #ffff00');
    })

    // Test : External css style
    it('has header text aligned to centered', () => {
        render(<SocialMedia name="YouTube" followersCount="2M+" />);
        const headingElement = screen.getByText('Social Media Info');
        expect(headingElement).toHaveClass('text-center');
    })

    // Test : Snapshot testing
    it('has right Social Media component snapshot', () => {
        
        const snapshotJson = renderer.create(<SocialMedia name="YouTube" followersCount="2M+" />);
        expect(snapshotJson).toMatchSnapshot();
    })
})



