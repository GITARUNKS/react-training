// Test Pattern: AAA [Arrange, Act, Assert] Pattern
// Arrange: Let us arrange the necessary tools for testing the component.
//  - In this case the component itself. So import the component.

import UnitTestingPage from "../../../pages/UnitTestingPage/UnitTestingPage";
import { render, screen } from "@testing-library/react"; // import from RTL

// Act - Let's write the test cases / specs
test("UnitTestingPage has heading as Unit Testing Demo", () => {
    render(<UnitTestingPage />);
    const headerElement = screen.getByText("Unit Testing Demo!");
    // Assert
    expect(headerElement).toBeInTheDocument();
})