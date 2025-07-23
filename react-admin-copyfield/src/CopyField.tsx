import React, { useState, ReactNode, isValidElement, useMemo } from 'react'
import { Box, Tooltip } from '@mui/material'
import { useRecordContext } from 'react-admin'

interface CopyFieldProps {
  text?: string
  children?: ReactNode
  sx?: object
}

export const CopyField: React.FC<CopyFieldProps> = ({
  text,
  children,
  sx,
}) => {
  const [copied, setCopied] = useState(false)
  const record = useRecordContext()

  const getValueToCopy = () => {
    if (text) return text
    if (isValidElement(children) && children.props?.source) {
      return record?.[children.props.source] ?? ''
    }
    return ''
  }

  const valueToCopy = getValueToCopy()

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(String(valueToCopy ?? ''))
      setCopied(true)
    } catch {}
  }

  return (
    <Tooltip title={copied ? 'Copied!' : 'Click to copy'}>
      <Box
        component="span"
        onClick={handleCopy}
        onMouseLeave={() => setCopied(false)}
        onBlur={() => setCopied(false)}
        tabIndex={0}
        sx={{
          display: 'inline-block',
          cursor: 'pointer',
          userSelect: 'text',
          outline: 'none',
          ...sx,
        }}
        aria-label={copied ? 'Copied!' : 'Click to copy'}
      >
        {children ?? valueToCopy}
      </Box>
    </Tooltip>
  )
}
