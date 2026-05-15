import styles from './style.module.css'

export default function OptionTable({ options }: { options: [string, string, any] }) {
  return (
    <div
      className={
        'mb-4 mt-6 overflow-x-auto overscroll-x-contain px-6 pb-4 ' +
        styles.container
      }
    >
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="py-4 text-left border-b border-gray-100 dark:border-gray-700">
            <th className="py-2 font-semibold">Option</th>
            <th className="py-2 pl-6 font-semibold">Type</th>
            <th className="px-6 py-2 font-semibold">Description</th>
          </tr>
        </thead>
        <tbody className="align-baseline text-gray-900 dark:text-gray-100">
          {options.map(([option, type, description]) => (
            <tr
              key={option}
              className="py-4 text-left border-b border-gray-100 dark:border-gray-700"
            >
              <td className="whitespace-pre py-2 font-mono text-xs font-semibold text-blue-600 dark:text-blue-400">
                {option}
              </td>
              <td className="whitespace-pre py-2 pl-6 font-mono text-xs font-semibold text-gray-500 dark:text-gray-400">
                {type}
              </td>
              <td className="py-2 pl-6 text-slate-900 dark:text-slate-100">{description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
