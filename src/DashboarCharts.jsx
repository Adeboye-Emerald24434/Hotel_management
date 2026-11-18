import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const lineData = [
  { day: 'Mon', activeUsers: 400 },
  { day: 'Tue', activeUsers: 700 },
  { day: 'Wed', activeUsers: 600 },
  { day: 'Thu', activeUsers: 1100 },
  { day: 'Fri', activeUsers: 950 },
  { day: 'Sat', activeUsers: 1400 },
];

const ratingData = [
  { rating: 5, count: 120 },
  { rating: 4, count: 85 },
  { rating: 3, count: 30 },
  { rating: 2, count: 12 },
  { rating: 1, count: 5 },
];

const pieIconData = [
  { name: 'Completed', value: 65, color: '#3b82f6' },
  { name: 'Remaining', value: 35, color: '#e2e8f0' },
];

const speedometerData = [
  { name: 'Low', value: 33, color: '#22c55e' },
  { name: 'Medium', value: 33, color: '#eab308' },
  { name: 'High', value: 34, color: '#ef4444' },
];


const StarAxisTick = ({ x, y, payload }) => {
  return (
    <g transform={`translate(${x - 70},${y - 10})`}>
      <text x={0} y={14} fill="#eab308" fontSize="14">
        {'★'.repeat(payload.value)}
      </text>
    </g>
  );
};


const renderNeedle = (value, data, cx, cy, iR, oR, color) => {
  let total = 0;
  data.forEach((v) => (total += v.value));
  

  const ang = 180.0 * (1 - value / total);
  const length = (iR + oR) / 2;
  const RADIAN = Math.PI / 180;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const cx2 = cx + length * cos;
  const cy2 = cy + length * sin;

  return [
    <circle key="needle-dot" cx={cx} cy={cy} r={6} fill={color} />,
    <path
      key="needle-path"
      d={`M ${cx} ${cy} L ${cx2} ${cy2}`}
      stroke={color}
      strokeWidth={3}
      strokeLinecap="round"
    />,
  ];
};


export default function DashboardCharts() {
  const speedValue = 65; 

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', padding: '24px', backgroundColor: '#f8fafc' }}>
      
      <div style={cardStyle}>
        <h3 style={titleStyle}>Activity Trend</h3>
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="day" stroke="#64748b" />
            <YAxis stroke="#64748b" />
            <Tooltip />
            <Line type="monotone" dataKey="activeUsers" stroke="#3b82f6" strokeWidth={3} dot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div style={cardStyle}>
        <h3 style={titleStyle}>Customer Ratings</h3>
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={ratingData} layout="vertical" margin={{ left: 50 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
            <XAxis type="number" stroke="#64748b" />
            <YAxis dataKey="rating" type="category" tick={<StarAxisTick />} width={70} />
            <Tooltip />
            <Bar dataKey="count" fill="#fbbf24" radius={[0, 6, 6, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div style={cardStyle}>
        <h3 style={titleStyle}>Task Progress</h3>
        <div style={{ position: 'relative', height: '260px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieIconData}
                cx="50%"
                cy="50%"
                innerRadius={65}
                outerRadius={85}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
              >
                {pieIconData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          
          <div style={centerOverlayStyle}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span style={{ fontSize: '12px', fontWeight: '600', color: '#64748b', marginTop: '2px' }}>65%</span>
          </div>
        </div>
      </div>

      <div style={cardStyle}>
        <h3 style={titleStyle}>Performance Score</h3>
        <div style={{ position: 'relative', height: '260px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                dataKey="value"
                startAngle={180}
                endAngle={0}
                data={speedometerData}
                cx="50%"
                cy="70%"
                innerRadius={60}
                outerRadius={85}
              >
                {speedometerData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
            {renderNeedle(speedValue, speedometerData, 160, 182, 60, 85, '#1e293b')}
          </svg>
          <div style={{ textAnchor: 'middle', textAlign: 'center', marginTop: '-35px' }}>
            <span style={{ fontSize: '20px', fontWeight: '700', color: '#1e293b' }}>{speedValue} / 100</span>
          </div>
        </div>
      </div>

    </div>
  );
}

const cardStyle = {
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  padding: '20px',
  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
  border: '1px solid #e2e8f0',
};

const titleStyle = {
  fontSize: '16px',
  fontWeight: '600',
  color: '#1e293b',
  marginBottom: '16px',
};

const centerOverlayStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  pointerEvents: 'none',
};