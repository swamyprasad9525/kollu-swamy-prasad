import { ReactFlow, Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';


const FlowDiagram = () => {
    const nodes = [
        { id: '1', position: { x: 250, y: 0 }, data: { label: 'Client (React)' }, style: { background: '#6366F1', color: 'white', border: 'none' } },
        { id: '2', position: { x: 250, y: 100 }, data: { label: 'API Gateway' }, style: { background: '#1E293B', color: '#94A3B8', border: '1px solid #334155' } },
        { id: '3', position: { x: 100, y: 200 }, data: { label: 'Auth Service' }, style: { background: '#1E293B', color: '#94A3B8', border: '1px solid #334155' } },
        { id: '4', position: { x: 400, y: 200 }, data: { label: 'Product Service' }, style: { background: '#1E293B', color: '#94A3B8', border: '1px solid #334155' } },
        { id: '5', position: { x: 400, y: 300 }, data: { label: 'MongoDB' }, style: { background: '#10B981', color: 'white', border: 'none' } },
    ];

    const edges = [
        { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#6366f1' } },
        { id: 'e2-3', source: '2', target: '3', style: { stroke: '#94a3b8' } },
        { id: 'e2-4', source: '2', target: '4', style: { stroke: '#94a3b8' } },
        { id: 'e4-5', source: '4', target: '5', animated: true, style: { stroke: '#10b981' } },
    ];

    return (
        <div style={{ height: '300px', width: '100%' }} className="rounded-lg overflow-hidden border border-slate-700 bg-slate-900/50">
            <ReactFlow nodes={nodes} edges={edges} fitView>
                <Background color="#334155" gap={16} />
                <Controls className="bg-slate-800 fill-slate-200 border-slate-700" />
            </ReactFlow>
        </div>
    );
};

export default FlowDiagram;
