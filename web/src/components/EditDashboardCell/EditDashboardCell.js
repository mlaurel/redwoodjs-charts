import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import DashboardForm from 'src/components/DashboardForm'

export const QUERY = gql`
  query FIND_DASHBOARD_BY_ID($id: String!) {
    dashboard: dashboard(id: $id) {
      id
      name
      json
      createdAt
      updatedAt
    }
  }
`
const UPDATE_DASHBOARD_MUTATION = gql`
  mutation UpdateDashboardMutation($id: String!, $input: UpdateDashboardInput!) {
    updateDashboard(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ dashboard }) => {
  const [updateDashboard, { loading, error }] = useMutation(UPDATE_DASHBOARD_MUTATION, {
    onCompleted: () => {
      navigate(routes.dashboards())
    },
  })

  const onSave = (input, id) => {
    updateDashboard({ variables: { id, input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">Edit Dashboard {dashboard.id}</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <DashboardForm dashboard={dashboard} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}