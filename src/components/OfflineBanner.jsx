import { useState } from 'react'
import { Wifi, WifiOff, RefreshCw, HardDrive, Zap } from 'lucide-react'
import { useToast } from './Toast'
import { offlineCacheData } from '../data/mockData'

export default function OfflineBanner({ onToggleOffline, onToggleBandwidth }) {
  const [offline, setOffline] = useState(offlineCacheData.isOffline)
  const [lowBandwidth, setLowBandwidth] = useState(offlineCacheData.isLowBandwidth)
  const [pendingSync, setPendingSync] = useState(offlineCacheData.pendingSyncItems)
  const [syncing, setSyncing] = useState(false)
  const [lastSync, setLastSync] = useState('12 min ago')
  const { showToast } = useToast()

  const handleToggleOffline = () => {
    const nextState = !offline
    setOffline(nextState)
    if (onToggleOffline) onToggleOffline(nextState)
    if (nextState) {
      showToast('Switched to Simulated Offline Mode. Using Cached NCERT Lessons.', 'info')
    } else {
      showToast('Back Online. Auto-syncing pending offline items...', 'success')
      handleSync()
    }
  }

  const handleToggleBandwidth = () => {
    const next = !lowBandwidth
    setLowBandwidth(next)
    if (onToggleBandwidth) onToggleBandwidth(next)
    showToast(next ? 'Low Bandwidth Mode Enabled (Images & videos compressed)' : 'Standard High-Speed Mode Active', 'info')
  }

  const handleSync = () => {
    if (pendingSync.length === 0) {
      showToast('All offline progress is up to date!', 'info')
      return
    }
    setSyncing(true)
    setTimeout(() => {
      setPendingSync([])
      setSyncing(false)
      setLastSync('Just now')
      showToast('Successfully synced 3 offline items with cloud database!', 'success')
    }, 1200)
  }

  return (
    <div className={`w-full text-xs font-medium border-b transition-colors px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 ${
      offline ? 'bg-amber-500 text-white border-amber-600' : 'bg-slate-900 text-slate-100 border-slate-800'
    }`}>
      <div className="flex items-center gap-3 flex-wrap">
        <div className="flex items-center gap-1.5 font-semibold">
          {offline ? <WifiOff size={15} className="animate-pulse" /> : <Wifi size={15} className="text-emerald-400" />}
          <span>{offline ? 'Offline Mode Active' : 'Online'}</span>
        </div>

        <span className="hidden sm:inline opacity-40">|</span>

        {/* Cached lessons indicator */}
        <span className="flex items-center gap-1 opacity-90">
          <HardDrive size={13} />
          {offlineCacheData.cachedLessonsCount} NCERT Lessons Cached
        </span>

        <span className="hidden sm:inline opacity-40">|</span>

        {/* Pending Sync */}
        <button
          onClick={handleSync}
          disabled={syncing || pendingSync.length === 0}
          className="flex items-center gap-1.5 hover:underline cursor-pointer opacity-90 disabled:opacity-50"
        >
          <RefreshCw size={13} className={syncing ? 'animate-spin' : ''} />
          {pendingSync.length > 0 ? `${pendingSync.length} Pending Sync Items (Click to sync)` : 'All synced ✓'}
        </button>

        <span className="hidden md:inline opacity-40">|</span>

        {/* Last Sync Time */}
        <span className="hidden md:flex items-center gap-1 opacity-80">
          Last sync: {lastSync}
        </span>
      </div>

      <div className="flex items-center gap-2">
        {/* Low bandwidth toggle */}
        <button
          onClick={handleToggleBandwidth}
          className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold border flex items-center gap-1 transition-all cursor-pointer ${
            lowBandwidth
              ? 'bg-amber-400 text-slate-950 border-amber-300 font-bold'
              : 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700'
          }`}
        >
          <Zap size={12} />
          {lowBandwidth ? 'Low Bandwidth: ON' : 'Low Bandwidth: OFF'}
        </button>

        {/* Offline Mode Toggle Switch */}
        <button
          onClick={handleToggleOffline}
          className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold border transition-all cursor-pointer ${
            offline
              ? 'bg-white text-amber-900 border-white hover:bg-amber-100'
              : 'bg-indigo-600 text-white border-indigo-500 hover:bg-indigo-500'
          }`}
        >
          {offline ? 'Go Online' : 'Simulate Offline'}
        </button>
      </div>
    </div>
  )
}
