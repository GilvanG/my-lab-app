interface ICountSimple {
    value: number;
    incrementFn: () => void;
    decrementFn: () => void;

}
export const CountSimple = ({value, incrementFn, decrementFn}: ICountSimple) => {

    return (
        <div>
            Contatagem em {value}
            <div>
                <button name="decrement" onClick={decrementFn} disabled={value<=0}>-</button>
                <button name="increment" onClick={incrementFn}>+</button>
            </div>
        </div>
    )
}