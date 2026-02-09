# Solved Problems

## WhatsApp Link Truncation with Ampersand
**Problem:** WhatsApp pre-filled messages were cutting off at the ampersand character (e.g., "Hello B & G" became "Hello B ").
**Root Cause:** Standard URL encoding (`%26`) was being decoded prematurely by the browser or the WhatsApp protocol handler before reaching the message input, causing the `&` to be treated as a URL parameter separator.
**Solution:** Switched to the more robust `api.whatsapp.com/send?phone=...&text=...` URL format and reverted to standard single encoding. This format handles special characters across different OS protocol handlers more reliably than the shortened `wa.me` link, ensuring "B & G" displays correctly without truncation.
