import { useState } from 'react';
import { Play, RotateCcw } from 'lucide-react';

const CodePlayground = () => {
    const [code, setCode] = useState("console.log('Hello Recruiter!');\nconst skills = ['React', 'Node'];\nreturn skills.length;");
    const [output, setOutput] = useState(null);
    const [error, setError] = useState(false);

    const runCode = () => {
        try {
            // Capture console.log output
            let logs = [];
            const originalLog = console.log;
            console.log = (...args) => logs.push(args.join(' '));

            // Simple evaluation (Safe enough for client-side demo)
            // Wrapping in a function to allow 'return'
            const result = new Function(code)();

            console.log = originalLog; // Restore console

            setOutput(logs.length > 0 ? logs.join('\n') + (result !== undefined ? '\n> ' + result : '') : (result !== undefined ? '> ' + result : 'Executed successfully'));
            setError(false);
        } catch (err) {
            setOutput(err.toString());
            setError(true);
        }
    };

    return (
        <div className="max-w-4xl mx-auto mt-20 px-4">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-4">Interactive Sandbox</h2>
                <p className="text-[var(--text-muted)]">Test my logic engine locally.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-0 border border-[var(--bg-secondary)] rounded-xl overflow-hidden shadow-2xl">
                {/* Editor */}
                <div className="bg-[#1e1e1e] p-4 flex flex-col">
                    <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-2">
                        <span className="text-xs text-gray-400 font-mono">script.js</span>
                        <div className="flex gap-2">
                            <button onClick={() => setCode("console.log('Hello Recruiter!');")} className="p-1 hover:bg-gray-700 rounded text-gray-400" title="Reset">
                                <RotateCcw size={14} />
                            </button>
                            <button
                                onClick={runCode}
                                className="flex items-center gap-1 bg-[var(--action-primary)] hover:opacity-90 text-white px-3 py-1 rounded text-xs transition-colors"
                            >
                                <Play size={12} /> Run
                            </button>
                        </div>
                    </div>
                    <textarea
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="w-full h-64 bg-transparent text-gray-300 font-mono text-sm resize-none focus:outline-none p-2"
                        spellCheck="false"
                    />
                </div>

                {/* Console */}
                <div className="bg-[#0f0f0f] p-4 font-mono text-sm border-l border-gray-800">
                    <div className="mb-4 pb-2 border-b border-gray-800 text-xs text-gray-500">Output Terminal</div>
                    <div className="h-64 overflow-y-auto">
                        {!output && <span className="text-gray-600 italic">// Output will appear here...</span>}
                        {output && (
                            <pre className={`whitespace-pre-wrap ${error ? 'text-red-400' : 'text-green-400'}`}>
                                {output}
                            </pre>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CodePlayground;
