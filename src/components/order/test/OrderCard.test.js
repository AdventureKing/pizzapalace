import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import {OrderCard} from "../OrderCard";


const deleteOrder = jest.fn();
const mockOrder = {

    "Crust": "Thin",
    "Flavor": "Cheese",
    "Order_ID": 0,
    "Size": "Large",
    "Table_No": 0,
    "Timestamp": "12-01-1900"
}

describe('OrderCard', () => {


    test('Render Card ', () => {
        render(<OrderCard order={mockOrder} deleteOrder={deleteOrder}/>);
        expect(screen.getByText(/Placed Order 0/ig)).toBeInTheDocument();
        expect(screen.getByText(/Crust: Thin/ig)).toBeInTheDocument();
        expect(screen.getByText(/Flavor: Cheese/ig)).toBeInTheDocument();
        expect(screen.getByText(/Size: Large/ig)).toBeInTheDocument();
        expect(screen.getByText(/Table Number: 0/ig)).toBeInTheDocument();
    })

    test('cancel order', async () => {
        render(<OrderCard order={mockOrder} deleteOrder={deleteOrder}/>);

        fireEvent.click(screen.getByText(/Cancel Order/ig));
        await waitFor(() => {

            expect(screen.getByText(/Crust/ig)).toBeInTheDocument();
            expect(screen.getByText(/Flavor/ig)).toBeInTheDocument();
            expect(screen.getByText(/Size/ig)).toBeInTheDocument();
            expect(screen.getByText(/Table Number/ig)).toBeInTheDocument();
            expect(deleteOrder).toBeCalledTimes(1);
        });
    })
});