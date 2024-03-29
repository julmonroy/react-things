export default function FeedbackForm() {
    function handleClick() {
        const fullName = prompt('What is your name?');
        alert(`Hello, ${fullName}!`);
    }

    return (
        <button onClick={handleClick}>
            Greet
        </button>
    );
}
