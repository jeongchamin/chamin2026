import useAuthStore from './store'

function Dashboard() {
  const { userName, logout } = useAuthStore()

  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f2f5', borderRadius: '8px' }}>
      <h2>안녕하세요, {userName}님! 👋</h2>
      <p>대시보드에 접속하셨습니다. 현재 Zustand로 로그인 상태가 관리되고 있어요.</p>
      <button onClick={logout} style={{ padding: '8px 16px', cursor: 'pointer' }}>
        로그아웃
      </button>
    </div>
  )
}

export default Dashboard