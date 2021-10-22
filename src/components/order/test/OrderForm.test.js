import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import {OrderForm} from "../OrderForm";

jest.mock('../../../api/order');
const setAlertMock = jest.fn();


describe('OrderCard', () => {

    test('Render Form ', async () => {
        render(<OrderForm setAlert={setAlertMock}/>);

        fireEvent.click(screen.getByText(/Place Order/ig));
        await waitFor(() => {
            expect(screen.getByText(/Please Fill Out Ordering Form/ig)).toBeInTheDocument();

            expect(screen.getByText(/Crust/ig)).toBeInTheDocument();
            expect(screen.getByText(/Flavor/ig)).toBeInTheDocument();
            expect(screen.getByText(/Size/ig)).toBeInTheDocument();
            expect(screen.getByText(/Table Number/ig)).toBeInTheDocument();
            expect(setAlertMock).toBeCalledTimes(0);
        });
    })

    test('Render Fprm and submit ', async () => {
        render(<OrderForm setAlert={setAlertMock}/>);

        fireEvent.click(screen.getByText(/Place Order/ig));
        await waitFor(() => {
            expect(screen.getByText(/Please Fill Out Ordering Form/ig)).toBeInTheDocument();

            expect(screen.getByText(/Crust/ig)).toBeInTheDocument();
            expect(screen.getByText(/Flavor/ig)).toBeInTheDocument();
            expect(screen.getByText(/Size/ig)).toBeInTheDocument();
            expect(screen.getByText(/Table Number/ig)).toBeInTheDocument();
            expect(setAlertMock).toBeCalledTimes(0);
        });
    })
});