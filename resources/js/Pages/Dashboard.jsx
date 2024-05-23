import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP } from "@/constant";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard({
    auth,
    totalPendingTasks,
    myPendingTasks,
    totalInProgressTasks,
    myInProgressTasks,
    totalCompletedTasks,
    myCompletedTasks,
    activeTasks,
}) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    <Link href={route("dashboard")}>Dashboard</Link>
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 grid grid-cols-3 gap-2">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h3 className="text-amber-500 text-2xl font-semibold">
                                Pending Tasks
                            </h3>
                            <p className="text-xl mt-4">
                                <span className="mr-2">{myPendingTasks}</span>/
                                <spna className="ml-2">
                                    {totalPendingTasks}
                                </spna>
                            </p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h3 className="text-blue-500 text-xl font-semibold">
                                In Progress Tasks
                            </h3>
                            <p className="text-xl mt-4">
                                <span className="mr-2">
                                    {myInProgressTasks}
                                </span>
                                /
                                <spna className="ml-2">
                                    {totalInProgressTasks}
                                </spna>
                            </p>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h3 className="text-green-500 text-xl font-semibold">
                                Completed Tasks
                            </h3>
                            <p className="text-xl mt-4">
                                <span className="mr-2">{myCompletedTasks}</span>
                                /
                                <spna className="ml-2">
                                    {totalCompletedTasks}
                                </spna>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-4">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h3 className="m-3 text-gray-200 text-xl font-semibold">
                                My Active Task
                            </h3>
                            <table className="m-3 w-full text-sm text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th className="px-3 py-3">ID</th>
                                        <th className="px-3 py-3">
                                            Project Name
                                        </th>
                                        <th className="px-3 py-3">Name</th>
                                        <th className="px-3 py-3">Status</th>
                                        <th className="px-3 py-3">Due Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {activeTasks.data.map((task) => (
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td className="px-3 py-2">
                                                {task.id}
                                            </td>
                                            <td className="px-3 py-2 text-white font-bold hover:underline">
                                                <Link
                                                    className="hover:underline"
                                                    href={route(
                                                        "project.show",
                                                        task.project.id
                                                    )}
                                                >
                                                    {task.project.name}
                                                </Link>
                                            </td>
                                            <td>{task.name}</td>
                                            <td>
                                                <span
                                                    className={
                                                        "px-2 py-1 rounded text-nowrap text-white " +
                                                        TASK_STATUS_CLASS_MAP[
                                                            task.status
                                                        ]
                                                    }
                                                >
                                                    {
                                                        TASK_STATUS_TEXT_MAP[
                                                            task.status
                                                        ]
                                                    }
                                                </span>
                                            </td>
                                            <td>{task.due_date}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
