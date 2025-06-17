# Assignment Generator

This script automatically generates a new assignment folder with all the necessary files and structure.

## Usage

### Using npm script (recommended):
```bash
npm run generate:assignment "button-component"
```

### Using node directly:
```bash
node scripts/generate-assignment.js "modal-dialog"
```

## What it creates

The generator will:

1. **Auto-increment the assignment number** (01, 02, 03, etc.)
2. **Convert your input to proper naming conventions**:
   - `"button component"` → `02-button-component` (folder)
   - `"button component"` → `Button Component` (display name)
   - `"button component"` → `ButtonComponentComponent` (React component)

3. **Create a complete assignment structure**:
   ```
   src/assignments/02-button-component/
   ├── index.tsx              # Main assignment page
   ├── metadata.ts            # Assignment metadata
   ├── README.md              # Assignment documentation
   ├── ButtonComponentComponent.test.tsx    # Test file
   └── ButtonComponentComponent.stories.tsx # Storybook stories
   ```

4. **Create a component stub**:
   ```
   src/components/ButtonComponentComponent.tsx
   ```

## Features

- ✅ **Auto-incrementing numbers**: Finds the highest existing assignment number and adds 1
- ✅ **Naming conventions**: Automatically converts to kebab-case, Title Case, and PascalCase
- ✅ **Complete file structure**: All necessary files with proper templates
- ✅ **Markdown rendering**: Built-in markdown documentation display
- ✅ **TypeScript ready**: Proper TypeScript interfaces and types
- ✅ **Testing setup**: Jest test file template
- ✅ **Storybook ready**: Story file with multiple variants
- ✅ **Component stub**: Basic component implementation to get started

## Examples

```bash
# Creates: 02-contact-form/
npm run generate:assignment "contact form"

# Creates: 03-image-gallery/
npm run generate:assignment "image gallery"

# Creates: 04-navigation-menu/
npm run generate:assignment "navigation-menu"
```

## Next Steps After Generation

1. **Implement your component** in `src/components/YourComponent.tsx`
2. **Update test data** in the assignment's `index.tsx`
3. **Customize the README.md** with specific requirements
4. **Add proper tests** and update the test file
5. **Create meaningful Storybook stories**
6. **Run `npm run dev`** to see your assignment in the browser

## File Templates

Each generated assignment includes:

- **Complete assignment page** with preview and documentation
- **Metadata file** with title, description, difficulty, and tags
- **Comprehensive README** with requirements and implementation details
- **Test file** with basic test structure
- **Storybook stories** with multiple variants
- **Component stub** to get you started quickly
