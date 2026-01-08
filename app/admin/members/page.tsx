import { connectToDatabase } from '@/lib/db';
import User from '@/models/User';
import { Mail, Search, MoreHorizontal, User as UserIcon } from 'lucide-react';

async function getMembers() {
    await connectToDatabase();
    const members = await User.find({ role: 'member' }).sort({ createdAt: -1 }).limit(20);
    return members;
}

export default async function AdminMembersPage() {
    const members = await getMembers();

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white">Member Management</h1>
                    <p className="text-gray-400 mt-2">View and manage registered members.</p>
                </div>
                <button className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors">
                    + Add Member
                </button>
            </div>

            <div className="bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden">
                <div className="p-4 border-b border-white/5 flex gap-4">
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search members..."
                            className="w-full pl-10 pr-4 py-2 bg-black border border-white/10 rounded-lg text-white focus:outline-none focus:border-red-500"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-gray-400">
                        <thead className="bg-black/50 text-xs uppercase font-medium text-gray-500">
                            <tr>
                                <th className="px-6 py-4">Member</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Plan</th>
                                <th className="px-6 py-4">Joined</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {members.length > 0 ? (
                                members.map((member: any) => (
                                    <tr key={member._id} className="hover:bg-white/5 transition-colors">
                                        <td className="px-6 py-4 flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white font-bold">
                                                {member.image ? (
                                                    <img src={member.image} alt={member.name} className="w-full h-full rounded-full object-cover" />
                                                ) : (
                                                    <UserIcon className="w-5 h-5" />
                                                )}
                                            </div>
                                            <div>
                                                <div className="font-medium text-white">{member.name}</div>
                                                <div className="text-xs">{member.email}</div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="px-2 py-1 rounded text-xs font-medium bg-green-500/10 text-green-500">
                                                Active
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            {member.membership?.active ? 'Monthly' : 'None'}
                                        </td>
                                        <td className="px-6 py-4">
                                            {new Date(member.createdAt).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="p-2 hover:text-white transition-colors">
                                                <MoreHorizontal className="w-5 h-5" />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                                        No members found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
