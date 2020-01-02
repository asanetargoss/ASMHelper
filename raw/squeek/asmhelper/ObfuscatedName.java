package squeek.asmhelper;

import javax.annotation.Nonnull;

/**
 * Object for storing and retrieving a method/function name.
 * Useful when working with Minecraft methods and fields, whose
 * value can be a srgname in a release environment but an MCP
 * name in a development environment.
 * @author asanetargoss
 */
public class ObfuscatedName {
	private final String srgName;
	/** Initially null. Given cached value when get()
	 * is called in a development environment */
	private String mcpName = null;
	
	public ObfuscatedName(@Nonnull String srgName) {
		this.srgName = srgName;
	}
	
	/**
	 * Get name relevant for current environment.
	 * In development environment, default to srgName
	 * if mcpName is not present in the mapping.
	 */
	public @Nonnull String get() {
		if (ObfHelper.isObfuscated()) {
			return srgName;
		}
		else {
			if (mcpName == null) {
				mcpName = DevMappings.get(srgName);
				if (mcpName == null) {
					mcpName = srgName;
				}
			}
			return mcpName;
		}
	}
}
