import {render, screen} from "@testing-library/react";
import {Orders} from "../Orders";


describe('Orders', () => {

    test('Render Orders ', () => {
        render(<Orders/>);
        expect(screen.getByText(/Please Fill Out Ordering Form/ig)).toBeInTheDocument();
        expect(screen.getByText(/Crust/ig)).toBeInTheDocument();
        expect(screen.getByText(/Flavor/ig)).toBeInTheDocument();
        expect(screen.getByText(/Size/ig)).toBeInTheDocument();
        expect(screen.getByText(/Table Number/ig)).toBeInTheDocument();
    })
});