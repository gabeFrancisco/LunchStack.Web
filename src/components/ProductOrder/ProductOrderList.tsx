function ProductOrderList() {
  return (
    <table className="w-full my-3">
      <thead className="border">
        <tr>
          <th>Produto</th>
          <th>Quantidade</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border ">
          <td>Hambuger de Carne</td>
          <td>4</td>
          <td>R$80,00</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ProductOrderList;
