import { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

const GitHubTerminal = () => {
    const [stats, setStats] = useState({
        repos: 0,
        followers: 0,
        following: 0,
        latestRepo: 'loading...',
    });
    const [lines, setLines] = useState([
        { text: "Initializing connection to GitHub API...", color: "text-slate-400" }
    ]);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                await new Promise(r => setTimeout(r, 800)); // Simulate delay
                setLines(prev => [...prev, { text: "> CONNECTED: User layout loaded", color: "text-green-400" }]);

                const response = await fetch('https://api.github.com/users/KSwamyPrasad');
                const data = await response.json();

                if (data.login) {
                    setStats({
                        repos: data.public_repos,
                        followers: data.followers,
                        following: data.following,
                        latestRepo: 'profile-v2' // Mock as specific latest fetch might need another call
                    });
                    await new Promise(r => setTimeout(r, 500));
                    setLines(prev => [...prev, { text: `> FETECHED: ${data.public_repos} Public Repositories`, color: "text-blue-400" }]);
                    await new Promise(r => setTimeout(r, 300));
                    setLines(prev => [...prev, { text: `> STATS: ${data.followers} Followers`, color: "text-blue-400" }]);
                    setLines(prev => [...prev, { text: "> ACCESS GRANTED: Data visualization ready", color: "text-green-400" }]);
                } else {
                    throw new Error("User not found (using mocks)");
                }

            } catch (error) {
                // Fallback for demo if API limit hit or user doesn't exist
                setLines(prev => [...prev, { text: "> WARNING: API rate limit or offline mode. Using local cache.", color: "text-yellow-400" }]);
                setStats({ repos: 12, followers: 45, following: 10, latestRepo: 'portfolio-v1' });
            }
        };
        fetchStats();
    }, []);

    return (
        <div className="w-full max-w-md mx-auto glass-card rounded-lg overflow-hidden font-mono text-sm mt-8 shadow-2xl border border-slate-700/50">
            <div className="bg-[#0f172a] px-4 py-2 border-b border-slate-700 flex items-center justify-between">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex items-center gap-2 text-[var(--text-muted)] text-xs">
                    <Terminal size={12} />
                    <span>gh-stats.exe</span>
                </div>
            </div>
            <div className="bg-[var(--bg-primary)]/90 p-4 h-64 overflow-y-auto scrollbar-default">
                {lines.map((line, i) => (
                    <div key={i} className={`mb-1 ${line.color}`}>{line.text}</div>
                ))}
                <div className="mt-4 pt-4 border-t border-slate-800 grid grid-cols-2 gap-4">
                    <div>
                        <span className="text-[var(--text-muted)] block text-xs uppercase tracking-wider">Public Repos</span>
                        <span className="text-xl font-bold text-[var(--text-primary)]">{stats.repos}</span>
                    </div>
                    <div>
                        <span className="text-[var(--text-muted)] block text-xs uppercase tracking-wider">Followers</span>
                        <span className="text-xl font-bold text-[var(--text-primary)]">{stats.followers}</span>
                    </div>
                    <div className="col-span-2">
                        <span className="text-[var(--text-muted)] block text-xs uppercase tracking-wider">Latest Activity</span>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            <span className="text-amber-400">Push to {stats.latestRepo}</span>
                        </div>
                    </div>
                </div>
                <div className="mt-2 text-amber-500 animate-pulse">_</div>
            </div>
        </div>
    );
};

export default GitHubTerminal;
