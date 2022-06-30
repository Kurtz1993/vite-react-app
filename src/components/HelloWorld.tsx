type HeloWorldProps = {
  name: string;
};

export default function HelloWorld({ name }: HeloWorldProps) {
  return <h1>Hello, {name}!</h1>;
}
