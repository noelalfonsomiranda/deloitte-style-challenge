export default function Button({label='', size='md'}) {
  return (
    <button className={`button gradient p-2 px-8 rounded-full ${size}`}>{label}</button>
  )
}
