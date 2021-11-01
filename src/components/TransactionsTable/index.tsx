import { Countainer } from "./style";

export function TransactionsTable () {
    return (
        <Countainer>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>01/11/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdrawn">- R$1.000</td>
                        <td>Casa</td>
                        <td>30/10/2021</td>
                    </tr>
                </tbody>
            </table>
        </Countainer>
    )

}