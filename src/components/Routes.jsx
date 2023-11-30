import React from 'react'
import {Route, Routes} from 'react'

function Routes() {
  return (
    <div>
      <Routes>
            <Route path="/TestPage" element={<TestPage />} />
        </Routes>
    </div>
  )
}

export default Routes
