import { render,screen ,createRoot} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greetings from "./Greetings";

describe ("Greetings component",()=>{
    test("hello world",()=>{
        render(<Greetings/>);
        const helloElement= screen.getByText("hello world");
        expect(helloElement).toBeInTheDocument();
    });
    
        test("button was not clicked",()=>{
            render(<Greetings/>);
            const outputElement= screen.getByText("good to see you",{exact:false});
            expect(outputElement).toBeInTheDocument();
            
        });
        test("button was clicked",()=>{
            render(<Greetings/>);
            const buttonElement=screen.getByRole('button');
            userEvent.click(buttonElement);
            const outputElement= screen.getByText("changed");
            expect(outputElement).toBeInTheDocument();
            
        });
})
