import React, { useState } from "react"
import { Card, Alert } from "react-bootstrap"
import { auth } from "../../firebase"

export default function AccountState() {
  const [error, setError] = useState("")
  var currentUser = auth.currentUser

  
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile Page</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Logged in:</strong> {currentUser.email} 
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
      </div>
    </>
  )
}