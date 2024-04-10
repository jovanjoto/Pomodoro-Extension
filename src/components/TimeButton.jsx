
export default function TimeButton({ prompt, onPress, ...props}){
  return (
    <button className="" onClick={() => onPress()}>
      {prompt}
    </button>
  );
}