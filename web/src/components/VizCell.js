import DataLoader from "./DataLoader";

export const QUERY = gql`
  query($name: String!) {
    result: getViz(name: $name) {
      name
      vizName
    }
  }
`

export const containerClassName = "container w-full mx-auto px-2 pt-2";

export const Loading = () => <div className={containerClassName + " text-center"}>Loading...</div>

export const Empty = () => <div className={containerClassName + " text-center"}>Empty</div>

export const Failure = ({ error }) => <div className={containerClassName + " text-center"}>Error: {error.message}</div>

export const Success = ({ result }) => {
  return (
    <DataLoader vizName={result.vizName}/>
  )
}