import App3 from './Responding2Events.jsx';
export default function ColorSwitch({
                                        onChangeColor
                                    }) {
    return (
        <button onClick={e => {
            e.stopPropagation();
            onChangeColor();
        }}>
            Change color
        </button>
    );
}