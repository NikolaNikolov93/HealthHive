type StockDetailsProps = {
  stockDetails: Map<string, number>;
};

const StockDetails: React.FC<StockDetailsProps> = ({ stockDetails }) => {
  return (
    <ul>
      {Object.entries(stockDetails).map(([date, stock]) => (
        <li key={date}>
          {new Date(date).toLocaleDateString()}: {stock} in stock
        </li>
      ))}
    </ul>
  );
};

export default StockDetails;
