try { const theme = localStorage.getItem('flybench-theme'); if (theme === 'dark') document.documentElement.dataset.theme = 'dark'; } catch (_) {}
