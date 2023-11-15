import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { SimpleButton } from "./SimpleButton"

test("Click the button to switch ON/OFF display", async () => {
    render(<SimpleButton/>);
    const simpleButton = screen.getByRole("button");
    expect(simpleButton).toHaveTextContent(("OFF"));
    await userEvent.click(simpleButton);
    expect(simpleButton).toHaveTextContent("ON");
});

