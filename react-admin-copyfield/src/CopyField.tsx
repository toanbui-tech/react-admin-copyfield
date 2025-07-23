import React, { useState, ReactNode, isValidElement } from 'react'
import { Box, Tooltip } from '@mui/material'
import { useRecordContext } from 'react-admin'

interface CopyFieldProps {
  text?: string
  children?: ReactNode
  sx?: object
}

export const CopyField: React.FC<CopyFieldProps> = ({ text, children, sx }) => {
  const [copied, setCopied] = useState(false)
  const record = useRecordContext()
  const hoverText = copied ? 'Copied!' : 'Click to copy'

  let valueToCopy = text
  if (!text && isValidElement(children) && 'props' in children && children.props.source) {
    const source = children.props.source
    valueToCopy = record?.[source] ?? ''
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(String(valueToCopy ?? ''))
      setCopied(true)
    } catch {}
  }

  const resetCopied = () => copied && setCopied(false)

  return (
    <Tooltip title={hoverText}>
      <Box
        component="span"
        onClick={handleCopy}
        onMouseLeave={resetCopied}
        onBlur={resetCopied}
        tabIndex={0}
        sx={{
          display: 'inline-block',
          cursor: 'pointer',
          userSelect: 'text',
          outline: 'none',
          ...sx,
        }}
        aria-label={hoverText}
      >
        {children ?? valueToCopy}
      </Box>
    </Tooltip>
  )
}
