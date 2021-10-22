import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import {Dashboard} from "../Dashboard";
import {deleteSpecificOrder, getOrders} from '../../api/order';
import useToken from '../../context/useToken';

jest.mock('../../context/useToken');

jest.mock('../../api/order', () => ({
    deleteSpecificOrder: jest.fn(),
    getOrders: jest.fn()
}));
const setAlertMock = jest.fn();


describe('OrderCard', () => {
    beforeEach(() => {
        useToken.mockResolvedValue('123');
        getOrders.mockResolvedValue([{
            Order_ID: 1, Crust: 'thin', Flavor: 'cheese', Size: 'large', Table_No: 1, Timestamp: '111'
        }])
    })
    test('Render dashboard', async () => {
        render(<Dashboard setAlert={setAlertMock}/>);

        await waitFor(() => {
            expect(screen.getByText(/Crust/ig)).toBeInTheDocument();
            expect(screen.getByText(/Flavor/ig)).toBeInTheDocument();
            expect(screen.getByText(/Size/ig)).toBeInTheDocument();
            expect(screen.getByText(/Table Number/ig)).toBeInTheDocument();
        })

    });
    // test('Render dashboard and filter order ', async () => {
    //     render(<Dashboard setAlert={setAlertMock}/>);
    //     await waitFor(() => {
    //         expect(screen.getByText(/Flavor/ig)).toBeInTheDocument();
    //
    //     })
    //     fireEvent.change(screen.getByLabelText('search-input'), {target: {value: '23'}})
    //
    //     await waitFor(() => {
    //
    //         expect(screen.getByText(/Crust/ig)).not.toBeInTheDocument();
    //     })
    //
    // });

    test('Render dashboard and delete order ', async () => {
        render(<Dashboard setAlert={setAlertMock}/>);
        await waitFor(() => {
            expect(screen.getByText(/Flavor/ig)).toBeInTheDocument();

        })
        fireEvent.click(screen.getByText(/Cancel Order/ig));

        await waitFor(() => {

            expect(deleteSpecificOrder).toHaveBeenCalled();
        })

    });


});