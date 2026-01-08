'use client';

import { CreditCard, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';

const SUBSCRIPTIONS = [
    { id: 1, user: 'John Doe', plan: 'Monthly', status: 'Active', nextBilling: '2024-02-15', amount: '$49' },
    { id: 2, user: 'Jane Smith', plan: 'Annual', status: 'Active', nextBilling: '2024-12-01', amount: '$449' },
    { id: 3, user: 'Mike Johnson', plan: 'Quarterly', status: 'Expiring Soon', nextBilling: '2024-01-20', amount: '$129' },
    { id: 4, user: 'Sarah Wilson', plan: 'Monthly', status: 'Past Due', nextBilling: '2024-01-10', amount: '$49' },
];

export default function AdminSubscriptionsPage() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white">Subscription Management</h1>
                    <p className="text-gray-400 mt-2">Monitor billing cycles and plan statuses.</p>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-zinc-900 border border-white/5 p-6 rounded-2xl">
                    <div className="flex items-center gap-4 mb-2">
                        <div className="p-3 bg-green-500/10 text-green-500 rounded-lg">
                            <CheckCircle className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white">1,100</h3>
                            <p className="text-sm text-gray-400">Active Subscriptions</p>
                        </div>
                    </div>
                </div>
                <div className="bg-zinc-900 border border-white/5 p-6 rounded-2xl">
                    <div className="flex items-center gap-4 mb-2">
                        <div className="p-3 bg-red-500/10 text-red-500 rounded-lg">
                            <AlertCircle className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white">45</h3>
                            <p className="text-sm text-gray-400">Past Due / Failed</p>
                        </div>
                    </div>
                </div>
                <div className="bg-zinc-900 border border-white/5 p-6 rounded-2xl">
                    <div className="flex items-center gap-4 mb-2">
                        <div className="p-3 bg-blue-500/10 text-blue-500 rounded-lg">
                            <RefreshCw className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white">$52,400</h3>
                            <p className="text-sm text-gray-400">MRR (Monthly Revenue)</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-white/5">
                    <h2 className="text-xl font-bold text-white">Recent Transactions</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-gray-400">
                        <thead className="bg-black/50 text-xs uppercase font-medium text-gray-500">
                            <tr>
                                <th className="px-6 py-4">User</th>
                                <th className="px-6 py-4">Plan</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Next Billing</th>
                                <th className="px-6 py-4 text-right">Amount</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {SUBSCRIPTIONS.map((sub) => (
                                <tr key={sub.id} className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4 font-medium text-white">{sub.user}</td>
                                    <td className="px-6 py-4">{sub.plan}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded text-xs font-medium ${sub.status === 'Active' ? 'bg-green-500/10 text-green-500' :
                                                sub.status === 'Past Due' ? 'bg-red-500/10 text-red-500' :
                                                    'bg-yellow-500/10 text-yellow-500'
                                            }`}>
                                            {sub.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">{sub.nextBilling}</td>
                                    <td className="px-6 py-4 text-right font-bold text-white">{sub.amount}</td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-indigo-400 hover:text-indigo-300 transition-colors text-xs font-bold uppercase">Manage</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
